# riro-web — Contexto para Claude Code

## Qué es esto
Página pública de Riro Systems (rirosystems.com).
Empresa de automatización y monitoreo de plantas industriales.

## Stack
- **Framework:** Astro 5 con React y Tailwind CSS
- **Deploy:** CT117 en Proxmox → Cloudflare (pendiente)
- **Repo:** github.com/RiroSystems/riro-web

## Marca y tono
- Ver `/root/docs/riro_systems_brand_profile_v5.md` en el host para guía completa
- Esencia: "Experto Silencioso" — tecnología que trabaja sin que se note
- Visual: Matriz Conectada — grillas, nodos, conexiones
- Tono: profesional, directo, sin jerga innecesaria
- Colores actuales: fondo blanco, navy `#1B2A4A`, teal `#2B96AD` (extraídos del logo)
- Logo: `public/riro_system_logo.jpeg` (horizontal 520×210)

## Estructura del proyecto
```
src/
├── components/     # Navbar, Footer, componentes reutilizables
├── content/blog/   # Posts del blog en Markdown
├── layouts/        # BaseLayout.astro
├── pages/          # index, home, contacto, ops, proyecto-piloto, blog
└── styles/         # global.css
```

## Páginas existentes
- `/` → index (home principal)
- `/home` → home alternativo
- `/contacto` → formulario de contacto
- `/ops` → página del producto OPS (caso PMS validado)
- `/proyecto-piloto` → página del piloto
- `/blog` → listado de posts

## Workflow con Claude Code
1. Siempre trabajar en rama `dev`
2. Claude edita archivos directamente en `/root/projects/riro-web`
3. Revisar cambios con `git diff` antes de commitear
4. Commit descriptivo → push a dev
5. Para producción: Pull Request dev → main en GitHub

## Comandos útiles
```bash
# Ver cambios antes de guardar
git diff

# Guardar cambios
git add .
git commit -m "tipo: descripción"
git push origin dev

# Deploy completo al CT117 (pull + build + publicar)
pct exec 117 -- bash -c "cd /root/riro-website && git pull origin dev && npm run build && cp -r dist/. /srv/riro-web/"
```

## Arquitectura del deploy en CT117
- Repo local en CT117: `/root/riro-website`
- Build genera archivos en: `/root/riro-website/dist/`
- Nginx sirve desde: `/srv/riro-web/` ← hay que copiar manualmente el dist
- El `cp -r dist/. /srv/riro-web/` es OBLIGATORIO — sin ese paso los cambios no se ven
- node_modules está instalado en el CT117, no en el host Proxmox

## Lo que NO hacer
- No tocar `dist/` — se genera automáticamente con npm run build
- No commitear node_modules ni .env
- No pushear directo a main — siempre via Pull Request
