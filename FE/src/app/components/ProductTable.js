import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button } from "@mui/material";

const products = [
  { id: "TR80091250", name: "Univet 516 - Safety Spectacles", brand: "Univet", category: "Health & Beauty", googleCategory: "Personal Care > Eyewear" },
  { id: "TR80091258", name: "Univet - Black Neck Cord", brand: "Univet", category: "Health & Beauty", googleCategory: "Personal Care > Eyewear" },
];

const ProductTable = () => {
  return (
    <TableContainer className="table-container">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell><Checkbox /></TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product ID</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Google Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell><Checkbox /></TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.googleCategory}</TableCell>
              <TableCell>
                <Button variant="contained" size="small">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;