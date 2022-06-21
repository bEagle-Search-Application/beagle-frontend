# codingstandards-frontend

1. Uso de react funcional (Hooks)
2. Componentes & Paginas --> CamelCase // Header, Sidebar, Menu, CreateAccount 
3. Componentes sin "children" utilizan cierre automático // "< App >{children}</ App > ✅" -- "< App >< App />❌" -- "< App /> ✅"
4. Funciones --> lowerCamelCase // callEndpoint, callFetch, geData, removeUserFromData
5. Handlers de Components siempre anteponer "on" --> onChange, onSubmit, onBlur, etc
6. Handlers de Context no agregar "on" --> addCard, addUser, removeUser, etc
7. Custom Hooks siempre con use // useCard, useFetch, useForm, etc  
