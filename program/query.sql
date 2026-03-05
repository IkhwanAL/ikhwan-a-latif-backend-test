SELECT 
  m.id as id_murid,
  m.name as name,
  p.pendidikan_terakhir,
  m.time_create,
  p.last_date_school as time_update
FROM murid as m 
INNER JOIN (
  SELECT p.id_murid, pp.last_date_school, p.status as pendidikan_terakhir FROM pendidikan as p
  INNER JOIN (
    SELECT MAX(p.time_create) as last_date_school, p.id_murid FROM pendidikan as p 
    GROUP BY p.id_murid
  ) as pp ON pp.last_date_school = p.time_create 
) as p WHERE m.id = p.id_murid;
