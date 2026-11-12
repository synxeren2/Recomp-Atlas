import json, re, sys, unicodedata
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).parent
input_path = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT/'upstream-games.json'
raw = json.loads(input_path.read_text())
TYPES = {'static-recomp': 'recomp', 'decompilation': 'decomp', 'source-port': 'port', 'engine-remake': 'engine', 'browser-port': 'browser', 'disassembly': 'disasm', 'tool': 'tool'}
PLATFORMS = {'og xbox': 'Xbox', 'switch2': 'Switch 2', '': 'Belirtilmemiş', 'Gameboy': 'Game Boy', 'Gameboy Color': 'Game Boy Color'}
CURATED = {
 'Zelda64Recomp/Zelda64Recomp': {'name': 'Zelda 64: Recompiled', 'summary': "Termina'ya yeniden dön. Majora’s Mask için yüksek kare hızı, geniş ekran, modern kontroller ve mod desteği sunan yerel port.", 'image': 'assets/zelda.jpg', 'features': ['Yüksek kare hızı', 'Geniş ekran', 'Mod desteği', 'Jiroskopla nişan alma'], 'mods': 'https://thunderstore.io/c/zelda-64-recompiled/', 'discord': 'https://discord.gg/AWZThJ4dPf'},
 'hedge-dev/UnleashedRecomp': {'name': 'Unleashed Recompiled', 'summary': 'Sonic Unleashed’ın Xbox 360 sürümünü statik yeniden derleme ile bilgisayarına taşı. Klasik macerayı yerel olarak keşfet.', 'image': 'assets/sonic.png'},
 'BanjoRecomp/BanjoRecomp': {'name': 'Banjo: Recompiled', 'summary': 'Ayı ve kuş yeniden bir arada. Banjo-Kazooie’yi modern sistemlere taşıyan, mod desteğine sahip statik recomp projesi.', 'image': 'assets/banjo.jpg', 'mods': 'https://thunderstore.io/c/banjo-recompiled/'},
 'HarbourMasters/Shipwright': {'name': 'Ship of Harkinian', 'type': 'port', 'summary': 'Ocarina of Time’ın decomp çalışmasına dayanan yerel portu. Hyrule’u modern sistemlerde yeniden keşfet.'},
 'HarbourMasters/2ship2harkinian': {'name': '2 Ship 2 Harkinian', 'type': 'port', 'summary': 'Harbour Masters ekibinin Majora’s Mask için geliştirdiği, decomp tabanlı yerel port.'},
 '2ship2harkinian/2ship2harkinian': {'name': '2 Ship 2 Harkinian', 'type': 'port', 'summary': 'Majora’s Mask’in decomp çalışmasına dayanan yerel portu. Termina macerasını modern sistemlerde yeniden keşfet.'},
 'coop-deluxe/sm64coopdx': {'type': 'port'},
 'HarbourMasters/Starship': {'name': 'Starship', 'type': 'port', 'summary': 'Star Fox 64 için Harbour Masters tarafından geliştirilen decomp tabanlı yerel port.'},
 'n64decomp/sm64': {'name': 'Super Mario 64', 'summary': 'Mantar Krallığı’nın kaynak koduna açılan kapı. Super Mario 64’ün decompilation çalışması ve birçok yerel portun temeli.', 'image': 'assets/mario.jpg'},
 'open-goal/jak-project': {'name': 'OpenGOAL', 'summary': 'Jak and Daxter serisinin GOAL dilini ve oyunlarını modern bilgisayarlara taşıyan tersine mühendislik projesi.'},
 'Rainchus/Donkey-Kong-64-Recompiled': {'name': 'DK64: Rekongpiled', 'summary': 'Donkey Kong 64’ün statik yeniden derleme projesi. Kong ekibinin macerasını bilgisayarında keşfet.', 'mods': 'https://dk64recomp.com/mods.html'},
 'n64decomp/mk64': {'name': 'Mario Kart 64 Decomp', 'summary': 'Mario Kart 64’ün orijinal oyun kodunu yeniden oluşturan decompilation projesi.'},
 'zeldaret/oot': {'name': 'Ocarina of Time Decomp', 'summary': 'The Legend of Zelda: Ocarina of Time’ın kaynak kodunu yeniden oluşturan topluluk çalışması.'},
 'zeldaret/mm': {'name': 'Majora’s Mask Decomp', 'summary': 'Majora’s Mask’in orijinal koduna odaklanan ZeldaRET decompilation çalışması.'},
 'doldecomp/melee': {'name': 'Super Smash Bros. Melee', 'summary': 'GameCube klasiği Super Smash Bros. Melee’nin kaynak kodunu yeniden oluşturan decompilation projesi.'},
}
def safe_url(v):
 return v if isinstance(v, str) and v.startswith(('https://', 'http://')) else None

games = []
for g in raw['games']:
 if not safe_url(g.get('url')): continue
 if set(g.get('sources', [])) == {'quiver'} and g.get('repo') not in CURATED and g.get('repo') != 'tgeorgiadis/quiver-launcher': continue
 p = {k: g.get(k) for k in ['id', 'title', 'repo', 'stars', 'last_commit', 'archived', 'license', 'release', 'release_date', 'releases', 'progress', 'decompdev_url']}
 p.update(type=TYPES.get(g['type'], 'decomp'), platform=PLATFORMS.get(g.get('platform', ''), g.get('platform', '')),
   url=safe_url(g['url']), description=(g.get('description') or '')[:700], homepage=safe_url(g.get('homepage')),
   release_url=safe_url(g.get('release_url')), video=safe_url(g.get('video')), play_url=safe_url(g.get('play_url')),
   screenshot=('https://raw.githubusercontent.com/SubmitGame/awesome-decomp-games/main/' + g['screenshot']) if g.get('screenshot') else None)
 p.update(CURATED.get(g.get('repo'), {}))
 p['name'] = p.get('name') or g['title']
 games.append({k:v for k,v in p.items() if v is not None and v != ''})
seeds = json.loads((ROOT/'dist/tool-seeds.json').read_text())
games.extend(p for p in seeds if p['id'] not in {g['id'] for g in games})
counts = Counter(p['id'] for p in games)
for p in games:
 if counts[p['id']] > 1:
  slug = re.sub(r'[^a-z0-9]+', '-', unicodedata.normalize('NFKD', p['title']).encode('ascii','ignore').decode().lower()).strip('-')
  p['id'] += '--' + slug
out = {'generated_at': raw['generated_at'], 'source': 'https://github.com/SubmitGame/awesome-decomp-games', 'license': 'CC0-1.0', 'projects': games}
(ROOT/'dist/catalog.json').write_text(json.dumps(out, ensure_ascii=False, separators=(',', ':')))
(ROOT/'dist/curated.json').write_text(json.dumps(CURATED, ensure_ascii=False, separators=(',', ':')))
print(f'{len(games)} projects prepared; {(ROOT/"dist/catalog.json").stat().st_size:,} bytes')
