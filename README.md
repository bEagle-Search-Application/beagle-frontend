# Template de Typescript con un setup de eslint y prettier

1. Recuerda que puedes si tienes alguna sugerencia de alguna regla a añadir puedes realizar un PR.

# Estándares de código

## 1. **Uso de react funcional (Hooks)**

## 2. **Uso de arrow functions (Hooks)**

## 3. **Componentes & Layouts & Paginas en CamelCase**

CamelCase --> Cada palabra empieza con mayúscula

<code>
  const Header = () => {return ...}</br>
  const SideBar = () => {return ...}</br>
  const Menu = () => {return ...}</br>
  const CardGroup = () => {return ...}</br>
  const CardItem = () => {return ...}</br>
  const AuthLayout = () => {return ...}</br>
  const ProductList = () => {return ...}</br>
</code>

<br/>

## 4. **Componentes sin "children" utilizan cierre automático**

<pre>
❌❌
  const Layout = () =>{
    return < App> < /App>
}
</pre>
<pre>
✅✅
  const Layout = () =>{
    return < App/>
}
</pre>
<pre>
✅✅
  const Layout = ({children}) =>{
    return {
      < App>
        {children}
      < /App>
    }
}
</pre>

# 5. **Funciones en lowerCamelCase**

LowerCamelCase --> Camel Case pero la primera siempre empieza con minúscula

<code>
  const callEndPoint = () => {} </br>
  const callFetch = () => {} </br>
  const getData = () => {} </br>
  const createUser = () => {} </br>
  const registerUser = () => {} </br>
  const removeUser = () => {} </br>
</code>

<br/>

# 6. **Handlers de Components siempre anteponer "handle"**

<code>
  const handleChange = () => {} </br>
  const handleSubmit = () => {} </br>
  const handleBlur = () => {} </br>
  const handleClick = () => {} </br>
</code>

<br/>

# 7. **Handlers de Context no agregar "no" ni "handle", ser específicos de la acción de la función en lo posible**

<code>
  const addUser = () => {} </br>
  const removeUser = () => {} </br>
  const updateUser = () => {} </br>
</code>

<br />

# 8. **Custom Hooks siempre anteponer "use"**

<code>
  useCard() </br>
  useFetch() </br>
  useCallEndPoint() </br>
  useForm() </br>
</code>
