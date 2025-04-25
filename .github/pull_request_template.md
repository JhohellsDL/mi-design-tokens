# 🚀 Pull Request Checklist - Ride UI

Por favor completa este checklist antes de pedir revisión del PR:

## 📦 Estructura

- [ ] Se ha seguido la estructura de carpetas del componente (`components/`, `hooks/`, `logic/`, etc).
- [ ] Los props se definieron como `type` y no `interface`.
- [ ] Los props siguen la convención `text[NombreComponente]`.

## 🧩 Componentización

- [ ] Se utilizó `forwardRef` si el componente necesita exponer referencias.
- [ ] El componente exporta su versión estilizada con `Styled`.

## 🎨 Estilos

- [ ] Se utilizaron estilos modulares (`.tamagui.ts`) si aplica.
- [ ] Se respeta el uso de `containerStyle[nombreComponente]`.

## 🔍 TestIDs

- [ ] Se creó un tipo base de testIDs para el componente.
- [ ] Se extendió el tipo de testIDs en los props si aplica.

## 📚 Documentación

- [ ] Se actualizó `RideComponent.notes.ts` si hubo cambio en los props o comportamiento.
- [ ] Se actualizó `RideComponent.stories.tsx` para reflejar los nuevos props o comportamiento.

## 🧪 Testing

- [ ] Se añadieron o actualizaron pruebas en `__tests__/`.
- [ ] Se cumple con el mínimo de cobertura de pruebas del 85%.

## 🧠 Otros

- [ ] Se validó accesibilidad (WCAG) si aplica.
- [ ] El código pasó por revisión (peer review o auto revisión).
