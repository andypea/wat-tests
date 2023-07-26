(module 
  (func $add (param $m i32) (param $n i32) (result i32) 
    local.get $m
    local.get $n
    i32.add
  )
  (export "add" (func $add))
)
