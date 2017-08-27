export const fillColumn = { flex: 1, flexDirection: "column" }
export const fill = { flex: 1 }
export const column = { flexDirection: "column" }
export const center = { alignItems: "center", justifyContent: "center" }
export const items = { alignItems: "center" }
export const justify = { justifyContent: "center" }
export const wrap = { flexWrap: "wrap" }
export const columnMobile = { flexDirection: 'column', "@media(min-width: 40em)": { flexDirection: 'row' } }

export default {
  fillColumn,
  fill,
  column,
  center,
  items,
  justify,
  wrap,
  columnMobile
}
