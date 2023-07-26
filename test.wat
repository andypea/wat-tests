(module 
  (import "console" "log" (func $log (param i32)))
  (func $add (param $m i32) (param $n i32) (result i32) 
    local.get $m
    local.get $n
    i32.add
  )
  (func (export "logIt")
    i32.const 13
    call $log
  )
  (export "add" (func $add))
)
