/// <reference path="./crud.d.ts" />

import * as CRUD from "./crud.js"
import { RowElement, RowID } from "./interface.js"

const row: RowElement = {
  firstName: "John",
  lastName: "Doe"
}

const newRowID: RowID = CRUD.insertRow(row)

CRUD.updateRow(newRowID, {
  firstName: "Micheal",
  lastName: "Angelo",
  age: 23
})

CRUD.deleteRow(newRowID)