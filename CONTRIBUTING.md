# 🚀 Guía de Contribución

¡Gracias por tu interés en contribuir a **LatamDevelopers**! Este proyecto existe gracias a personas como tú que quieren dar visibilidad a los desarrolladores de Latinoamérica.

---

## Guía Rápida (TLDR)

1. Haz un **Fork** de este repositorio.
2. **Clona** tu fork en tu máquina local.
3. Crea una nueva **rama** (`add/tu-nombre`).
4. Añade tu portafolio en la sección de tu país, **en orden alfabético**.
5. Haz **commit** y **push** de tu rama.
6. Abre un **Pull Request**.

Si nunca has hecho un Pull Request, no te preocupes. Más abajo tienes una guía paso a paso. 👇

---

## 📝 Formato

Añade tu entrada en la sección de tu país con el siguiente formato:

```markdown
- [Tu Nombre](https://tu-portafolio.com) - Tu Rol o Especialidad
```

### Ejemplo

```markdown
- [María García](https://mariagarcia.dev) - Frontend Developer
```

### Resultado

- [María García](https://mariagarcia.dev) - Frontend Developer

---

## ✅ Reglas Importantes

Antes de enviar tu Pull Request, asegúrate de cumplir con lo siguiente:

- [ ] Tu entrada está en la **sección del país correcto**
- [ ] Tu entrada está en **orden alfabético** (por nombre)
- [ ] El enlace apunta a un **portafolio o sitio personal funcional**
- [ ] Usas el **formato correcto**: `- [Nombre](enlace) - Rol`
- [ ] Solo **un portafolio por persona**

---

## 📖 Guía Paso a Paso para Principiantes

¿Es tu primera vez contribuyendo a un proyecto open source? ¡Excelente! Aquí tienes una guía completa.

### Requisitos Previos

1. Tener [Git](https://git-scm.com) instalado en tu computadora.
2. Tener una cuenta en [GitHub](https://github.com).

### Paso 1: Hacer Fork del Repositorio

1. Ve a la página principal de este repositorio.
2. Haz clic en el botón **"Fork"** en la esquina superior derecha.
3. Esto creará una copia del repositorio en tu cuenta de GitHub.

### Paso 2: Clonar tu Fork

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/TU-USUARIO/TU-FORK.git
```

> **Nota:** Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub y `TU-FORK` con el nombre del repositorio.

### Paso 3: Crear una Rama

```bash
cd TU-FORK
git checkout -b add/tu-nombre
```

> **Ejemplo:** `git checkout -b add/maria-garcia`

### Paso 4: Añadir tu Portafolio

1. Abre el archivo `README.md` con tu editor de texto favorito.
2. Busca la sección de tu país (ej: `## 🇲🇽 México`).
3. Añade tu entrada en **orden alfabético** dentro de esa sección:

```markdown
- [Tu Nombre](https://tu-portafolio.com) - Tu Rol
```

4. Guarda el archivo.

### Paso 5: Hacer Commit y Push

```bash
git add README.md
git commit -m "Add Tu Nombre"
git push origin add/tu-nombre
```

### Paso 6: Crear el Pull Request

1. Ve a tu fork en GitHub.
2. Verás un banner que dice **"Compare & pull request"**. Haz clic en él.
3. Asegúrate de que el **base repository** sea el repositorio principal.
4. Escribe un título descriptivo (ej: `Add María García`).
5. Haz clic en **"Create pull request"**.

### ¡Listo! 🎉

Tu Pull Request será revisado y, si todo está en orden, será aceptado. ¡Gracias por contribuir!

---

## 🆘 ¿Necesitas Ayuda?

Si tienes alguna duda o problema, no dudes en [abrir un Issue](../../issues) y te ayudaremos con gusto.

También puedes aprender más sobre cómo contribuir a proyectos open source con este recurso gratuito:
- [Cómo Contribuir a un Proyecto Open Source en GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) (en inglés)

---

## 📜 Código de Conducta

Este proyecto sigue un [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, te comprometes a respetar sus términos.
