/// <reference path="./crud.d.ts" />

import * as CRUD from "./crud.js"
import { RowElement, RowID } from "./interface.js"

const row: RowElement = {
  firstName: "John",
  lastName: "Doe"
}

const newRowID: RowID = CRUD.insertRow(row)

const updatedRow: RowElement = { ...row, age: 23 }

CRUD.updateRow(newRowID, updatedRow)

CRUD.deleteRow(newRowID)