(module 
  (func $add (param $m i64) (param $n i64) (result i64) 
    local.get $m
    local.get $n
    i64.add
  )
  (export "add" (func $add))
)
