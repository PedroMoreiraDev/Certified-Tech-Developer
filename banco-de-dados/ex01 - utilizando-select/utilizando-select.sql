-- Categorias e Produtos
SELECT CategoriaNombre AS CategoriaNome FROM categorias;

SELECT CategoriaNombre AS CategoriaNome, Descripcion AS Descricao FROM categorias;

SELECT ProductoNombre AS ProdutoNome 
FROM productos;

SELECT Discontinuado AS Discontinuado 
FROM productos WHERE Discontinuado != 0;

SELECT ProveedorID AS Fornecedor, ProductoNombre AS ProdutoNome 
FROM productos WHERE ProveedorID = 8; 

SELECT ProductoId, ProductoNombre, CategoriaID, UnidadesStock 
FROM productos WHERE UnidadesStock != 0;

SELECT ProductoNombre AS ProdutoNome, PrecioUnitario AS PrecoUnitario 
FROM productos WHERE PrecioUnitario >= 10 AND PrecioUnitario <= 22;

SELECT ProductoNombre AS ProdutoNome, UnidadesStock, NivelReorden
FROM productos WHERE UnidadesStock < NivelReorden;

-- Clientes

SELECT Contacto AS Contato, Compania AS Empresa, Titulo, Pais FROM clientes
ORDER BY pais;

SELECT Titulo FROM clientes WHERE Titulo = 'Owner';

SELECT contacto AS Contato, Compania AS Empresa FROM clientes WHERE contacto LIKE 'c%';

-- Contas

SELECT FacturaID AS FacutaID, FechaFactura AS FechamentoDaFatura, NombreEnvio AS NomeEnvio 
FROM facturas ORDER BY FechaFactura;

SELECT FacturaID AS FacutaID, NombreEnvio AS NomeEnvio, PaisEnvio, EnvioVia 
FROM facturas WHERE PaisEnvio LIKE '%USA%' AND NombreEnvio != 3;

SELECT FacturaID AS FacutaID, ClienteID FROM facturas WHERE ClienteID = 'GOURL';

SELECT EmpleadoID AS FuncionarioID, FacturaID FROM facturas 
WHERE EmpleadoID = 2 or EmpleadoID = 3 or EmpleadoID = 5 or EmpleadoID = 8 or EmpleadoID = 9;

-- Consultas parte 2

SELECT ProductoID AS ProdutoID, ProductoNombre AS ProdutoNome, PrecioUnitario AS PrecoUnitario 
FROM productos ORDER BY PrecioUnitario DESC;

SELECT ProductoID AS ProdutoID, ProductoNombre AS ProdutoNome, PrecioUnitario AS PrecoUnitario 
FROM productos ORDER BY PrecioUnitario DESC LIMIT 5;

SELECT ProductoID AS ProdutoID, ProductoNombre AS ProdutoNome, PrecioUnitario AS PrecoUnitario, UnidadesSTock
FROM productos ORDER BY UnidadesSTock DESC LIMIT 10;

-- FaturaDetalhe

SELECT FacturaID AS InvoiceID, ProductoID AS ProdutoID, Cantidad AS Quantidade
 FROM facturadetalle;
 
 SELECT FacturaID AS InvoiceID, ProductoID AS ProdutoID, Cantidad AS Quantidade
 FROM facturadetalle ORDER BY Cantidad DESC;
 
 SELECT FacturaID AS InvoiceID, ProductoID AS ProdutoID, Cantidad AS Quantidade
 FROM facturadetalle WHERE Cantidad BETWEEN 50 AND 100 ORDER BY Cantidad DESC;
 
 SELECT FacturaID AS InvoiceID, ProductoID AS ProdutoID, (PrecioUnitario*Cantidad) AS total
 FROM facturadetalle;
 
 -- Continuar praticando
 
 SELECT * FROM clientes;
 
 SELECT ClienteID, Compania, Pais, Titulo FROM clientes 
 WHERE pais = 'Brasil' OR pais = 'Mexico' OR Titulo LIKE '%Sales%';
 
 SELECT ClienteID, Compania FROM clientes 
 WHERE Compania LIKE 'a%';
 
 SELECT Ciudad AS Cidade, Contacto AS SobrenomeENome FROM clientes; 
 
 SELECT FacturaID FROM facturas 
 WHERE facturaID BETWEEN 10000 AND 10500;
 
 SELECT FacturaID, ClienteID FROM facturas 
 WHERE facturaID BETWEEN 10000 AND 10500 OR clienteID LIKE 'b%'; 

SELECT facturaID, CiudadEnvio AS CidadeEnvio, EnvioVia FROM facturas 
WHERE CiudadEnvio LIKE '%Vancouver%' OR EnvioVia = 3;

SELECT EmpleadoID AS EmpregadoID, Apellido AS Sobrenome FROM empleados 
WHERE Apellido LIKE '%Buchanan%';

SELECT * FROM Facturas
WHERE EmpleadoID = 5;