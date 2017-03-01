# Router

Un objeto *router* es una instancia aislada de middleware y rutas. Se puede pensar en ella como una "mini-aplicación", capaz sólo de realizar middleware y funciones de enrutamiento. Cada aplicación Express tiene un enrutador de aplicaciones incorporado.

Un enrutador se comporta como el propio middleware, por lo que puede utilizarlo como argumento para app.use () o como argumento para el método use () de otro enrutador.

El objeto express de nivel superior tiene un método Router () que crea un nuevo objeto de enrutador.

Una vez que haya creado un objeto enrutador, puede agregar rutas intermedias y de método HTTP (como get, put, post, etc.) como una aplicación. Por ejemplo:

```javascript
// Se invoca para cualquier petición pasada al router.
router.use(function(req, res, next) {
  // ...
  next();
});

/*
Manejará cualquier petición que se haga en /events.
Dependerá de donde esté el router "use()'d".
*/
router.get('/events', function(req, res, next) {
  // ...
});
```

A continuación, puede utilizar un enrutador para una URL raíz en particular, de esta manera separar sus rutas en archivos o mini-aplicaciones.

```javascript
// Sólo las solicitudes a /calendar/* serán enviadas a nuestro "router"
app.use('/calendar', router);	
```

## Métodos

### router.all(path, [callback, ...] callback)

Este método es igual que los métodos *router.METHOD()*, excepto que coincide con todos los métodos HTTP.

Este método es extremadamente útil para mapear la lógica "global" para prefijos de ruta específicos o coincidencias arbitrarias. Por ejemplo, si colocó la ruta siguiente en la parte superior de todas las demás definiciones de ruta, se requeriría que todas las rutas a partir de ese punto requerirían autenticación y cargarían automáticamente un usuario. Tenga en cuenta que estas devoluciones de llamada no tienen que actuar como puntos finales; *LoadUser* puede realizar una tarea y luego llamar a *next()* para seguir comparando las rutas subsiguientes.

```javascript
router.all('*', requireAuthentication, loadUser);

// Lo equivalente:
router.all('*', requireAuthentication)
router.all('*', loadUser);

// Si sólo queremos restringirnos al directorio /api haríamos...
router.all('/api/*', requireAuthentication);
```

### router.METHOD(path, [callback, ...] callback)

Proporcionan la funcionalidad de enrutamiento en Express, donde METHOD es uno de los métodos HTTP(GET, PUT, POST) y así sucesivamente en minúscula.

Puede proporcionar múltiples devoluciones de llamada, y todos se tratan de forma igual, y se comportan como middleware, excepto que estas devoluciones pueden invocar a continuación ('ruta') para omitir la(s) llamada(s) de ruta restantes. Puede utilizar este mecanismo para realizar las condiciones previas en una ruta y, a continuación, pasar el control a las rutas subsiguientes cuando no haya ninguna razón para proceder con la ruta coincidente.El fragmento siguiente ilustra la definición de ruta más sencilla posible. Express traduce las cadenas de ruta a expresiones regulares, utilizadas internamente para coincidir con las solicitudes entrantes. 

```javascript
router.get('/', function(req, res){
  res.send('hello world');
});	
// Note: el path puede ser una expresión regular.

```

### router.param(name, callback)

Agrega los disparadores de devolución de llamada a los parámetros de ruta, donde nombre es el nombre del parámetro y la devolución de llamada es la función de devolución de llamada. Aunque el nombre es técnicamente opcional, el uso de este método sin que sea obsoleto a partir de Express v4.11.0 (consulte a continuación).

Los parámetros de la función de devolución de llamada son:

- Req, el objeto request.
- Res, el objeto de respuesta.
- Siguiente, indicando la siguiente función de middleware.
- El valor del parámetro name.
- El nombre del parámetro.

Por ejemplo, cuando:
El usuario está presente en una ruta, puede asignar la lógica de carga del usuario para proporcionar automáticamente req.user a la ruta o realizar validaciones en la entrada de parámetros.

```javascript
router.param('user', function(req, res, next, id) {
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
});
```

### router.route(path)

### router.use([path], [function, ...] function)