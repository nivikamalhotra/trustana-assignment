import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from "@mui/material";

const attributes = [
  { name: "Scent", group: "Basic Info", enrichment: true },
  { name: "Food Item Condition", group: "Specifications", enrichment: false },
  { name: "Home Area", group: "Library Attributes", enrichment: true },
];

const AttributesTable = () => {
  return (
    <TableContainer className="table-container">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Attribute Name</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>AI Enrichment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attributes.map((attr) => (
            <TableRow key={attr.name}>
              <TableCell>{attr.name}</TableCell>
              <TableCell>{attr.group}</TableCell>
              <TableCell>
                <Switch defaultChecked={attr.enrichment} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttributesTable;