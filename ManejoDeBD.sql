--
-- Primer punto
--
SELECT  *
FROM producto
WHERE descripcion_producto LIKE 'LIMA%'
AND embalaje < 600;
--
-- Segundo punto
--
SELECT  p.año_proforma
       ,p.consecutivo_proforma
       ,p.fecha_proforma
       ,c.codigo_cliente
       ,c.Nombre_Cliente
       ,p.notas_pedido
       ,pr.descripcion_producto
       ,dp.cantidad
FROM proforma p
JOIN detalle_proforma dp
ON p.consecutivo_proforma = dp.consecutivo_proforma AND p.año_proforma = dp.año_proforma
JOIN clientes c
ON p.codigo_cliente = c.codigo_cliente
JOIN producto pr
ON dp.cod_producto = pr.cod_producto;
--
-- Tercer punto
--
SELECT  *
FROM detalle_proforma
WHERE consecutivo_proforma NOT IN ( SELECT consecutivo_proforma FROM proforma );
--
-- Cuarto punto
--
SELECT  p.cod_producto
       ,p.descripcion_producto
       ,i.inventario
FROM producto p
LEFT JOIN producto_ i
ON p.cod_producto = i.idproducto_;