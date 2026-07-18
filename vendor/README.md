# Vendored Browser Dependencies

These files keep the static application independent of third-party CDNs and preserve `file://` support.

| Package | Version | Browser file | License |
| --- | --- | --- | --- |
| D3 | 7.9.0 | `d3.min.js` | ISC (`licenses/D3-LICENSE`) |
| Three.js | 0.128.0 | `three.min.js`, `CSS3DRenderer.js`, `OrbitControls.js` | MIT (`licenses/THREE-LICENSE`) |
| Tween.js | 18.6.4 | `tween.umd.js` | MIT (`licenses/TWEEN-LICENSE`) |
| Noto Serif SC Variable | 5.2.10 | `../assets/fonts/noto-serif-sc/`, `../src/css/noto-serif-sc.css` | SIL OFL 1.1 (`licenses/NOTO-SERIF-SC-LICENSE`) |

Run `npm run vendor` after changing dependency versions. CI uses `npm run verify:vendor` to ensure these copies match `package-lock.json` installations.
