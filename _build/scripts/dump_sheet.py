import sys, openpyxl
wb = openpyxl.load_workbook("techbrot-blueprint-v4.xlsx", data_only=True)
print("SHEETS:", wb.sheetnames)
targets = sys.argv[1:] if len(sys.argv) > 1 else wb.sheetnames
for name in targets:
    if name not in wb.sheetnames:
        # allow index match like "5"
        try:
            name = wb.sheetnames[int(name)]
        except Exception:
            print("!! no sheet", name); continue
    ws = wb[name]
    print("\n" + "=" * 70)
    print(f"SHEET: {name}  ({ws.max_row} rows x {ws.max_column} cols)")
    print("=" * 70)
    for row in ws.iter_rows(values_only=True):
        cells = [str(c) if c is not None else "" for c in row]
        if any(cells):
            print(" | ".join(cells))
