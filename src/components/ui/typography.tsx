export function Typography({text,className=""}:any) {
  return (
    <h2 className={`scroll-m-20  pb-2 font-semibold tracking-tight first:mt-0  `+`${className}`}>
      {text}
    </h2>
  )
}
