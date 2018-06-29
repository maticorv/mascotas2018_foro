define({ "api": [
  {
    "type": "post",
    "url": "/image",
    "title": "Guardar Imagen",
    "name": "Guardar_Imagen",
    "group": "Imagen",
    "description": "<p>Guarda una imagen en la db</p>",
    "examples": [
      {
        "title": "Body",
        "content": "{\n  \"image\" : \"Base 64 Image Text\"\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"id\": \"id de imagen\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/image/image.service.ts",
    "groupTitle": "Imagen",
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/image/:id",
    "title": "Obtener Imagen",
    "name": "Obtener_Imagen",
    "group": "Imagen",
    "description": "<p>Obtiene una imagen</p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"id\": \"id de imagen\",\n  \"image\" : \"Base 64 Image Text\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/image/image.service.ts",
    "groupTitle": "Imagen",
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/pet/:petId",
    "title": "Actualizar Mascota",
    "name": "Actualizar_Mascota",
    "group": "Mascotas",
    "description": "<p>Actualiza los datos de una mascota.</p>",
    "examples": [
      {
        "title": "Mascota",
        "content": "{\n  \"name\": \"Nombre de la mascota\",\n  \"description\": \"Description de la mascota\",\n  \"birthDate\": date (DD/MM/YYYY),\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "version": "0.0.0",
    "filename": "src/pet/pet.service.ts",
    "groupTitle": "Mascotas",
    "success": {
      "examples": [
        {
          "title": "Mascota",
          "content": "{\n  \"name\": \"Nombre de la mascota\",\n  \"description\": \"Descripción de la mascota\",\n  \"user\": \"Id de usuario\",\n  \"birthDate\": date (DD/MM/YYYY),\n  \"updated\": date (DD/MM/YYYY),\n  \"created\": date (DD/MM/YYYY),\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/pet/:petId",
    "title": "Buscar Mascota",
    "name": "Buscar_Mascota",
    "group": "Mascotas",
    "description": "<p>Busca una mascota por id.</p>",
    "version": "0.0.0",
    "filename": "src/pet/pet.service.ts",
    "groupTitle": "Mascotas",
    "success": {
      "examples": [
        {
          "title": "Mascota",
          "content": "{\n  \"name\": \"Nombre de la mascota\",\n  \"description\": \"Descripción de la mascota\",\n  \"user\": \"Id de usuario\",\n  \"birthDate\": date (DD/MM/YYYY),\n  \"updated\": date (DD/MM/YYYY),\n  \"created\": date (DD/MM/YYYY),\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/pet",
    "title": "Crear Mascota",
    "name": "Crear_Mascota",
    "group": "Mascotas",
    "description": "<p>Crea una mascota.</p>",
    "examples": [
      {
        "title": "Mascota",
        "content": "{\n  \"name\": \"Nombre de la mascota\",\n  \"description\": \"Description de la mascota\",\n  \"birthDate\": date (DD/MM/YYYY),\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "version": "0.0.0",
    "filename": "src/pet/pet.service.ts",
    "groupTitle": "Mascotas",
    "success": {
      "examples": [
        {
          "title": "Mascota",
          "content": "{\n  \"name\": \"Nombre de la mascota\",\n  \"description\": \"Descripción de la mascota\",\n  \"user\": \"Id de usuario\",\n  \"birthDate\": date (DD/MM/YYYY),\n  \"updated\": date (DD/MM/YYYY),\n  \"created\": date (DD/MM/YYYY),\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/pet/:petId",
    "title": "Eliminar Mascota",
    "name": "Eliminar_Mascota",
    "group": "Mascotas",
    "description": "<p>Eliminar una mascota.</p>",
    "version": "0.0.0",
    "filename": "src/pet/pet.service.ts",
    "groupTitle": "Mascotas",
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/pet",
    "title": "Listar Mascota",
    "name": "Listar_Mascota",
    "group": "Mascotas",
    "description": "<p>Obtiene un listado de las mascotas del usuario actual.</p>",
    "success": {
      "examples": [
        {
          "title": "Mascota",
          "content": "[\n  {\n    \"name\": \"Nombre de la mascota\",\n    \"description\": \"Descripción de la mascota\",\n    \"user\": \"Id de usuario\",\n    \"birthDate\": date (DD/MM/YYYY),\n    \"updated\": date (DD/MM/YYYY),\n    \"created\": date (DD/MM/YYYY),\n    \"enabled\": [true|false]\n  }, ...\n]",
          "type": "json"
        },
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/pet/pet.service.ts",
    "groupTitle": "Mascotas",
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/profile",
    "title": "Actualizar Perfil",
    "name": "Actualizar_Perfil",
    "group": "Perfil",
    "description": "<p>Actualiza los datos del perfil de usuario.</p>",
    "examples": [
      {
        "title": "Perfil",
        "content": "{\n  \"name\": \"Nombre y Apellido\",\n  \"phone\": \"Teléfono\",\n  \"email\": \"Email\",\n  \"address\": \"Dirección\",\n  \"picture\": \"Id de imagen\",\n  \"province\": \"Id de provincia\",\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "version": "0.0.0",
    "filename": "src/profile/profile.service.ts",
    "groupTitle": "Perfil",
    "success": {
      "examples": [
        {
          "title": "Perfil",
          "content": "{\n  \"name\": \"Nombre y Apellido\",\n  \"phone\": \"Teléfono\",\n  \"email\": \"Email\",\n  \"address\": \"Dirección\",\n  \"picture\": \"Id de imagen\",\n  \"province\": \"Id de provincia\",\n  \"valid\": [true|false],\n  \"user\": \"Id de usuario\",\n  \"updated\": date (DD/MM/YYYY),\n  \"created\": date (DD/MM/YYYY),\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "Obtener Perfil",
    "name": "Obtener_Perfil",
    "group": "Perfil",
    "description": "<p>Obtiene el perfil del usuario logueado.</p>",
    "version": "0.0.0",
    "filename": "src/profile/profile.service.ts",
    "groupTitle": "Perfil",
    "success": {
      "examples": [
        {
          "title": "Perfil",
          "content": "{\n  \"name\": \"Nombre y Apellido\",\n  \"phone\": \"Teléfono\",\n  \"email\": \"Email\",\n  \"address\": \"Dirección\",\n  \"picture\": \"Id de imagen\",\n  \"province\": \"Id de provincia\",\n  \"valid\": [true|false],\n  \"user\": \"Id de usuario\",\n  \"updated\": date (DD/MM/YYYY),\n  \"created\": date (DD/MM/YYYY),\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/province",
    "title": "Crear Provincia",
    "name": "Crear_Provincia",
    "group": "Provincias",
    "description": "<p>Crea o actualiza una provincia.</p>",
    "examples": [
      {
        "title": "Provincia",
        "content": "{\n  \"name\": \"Nombre Provincia\",\n  \"enabled\": [true|false]\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Provincia",
          "content": "{\n  \"name\": \"Nombre Provincia\",\n  \"enabled\": [true|false]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/provinces/province.service.ts",
    "groupTitle": "Provincias",
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/province/:provinceId",
    "title": "Eliminar Provincia",
    "name": "Eliminar_Provincia",
    "group": "Provincias",
    "description": "<p>Elimina una provincia.</p>",
    "version": "0.0.0",
    "filename": "src/provinces/province.service.ts",
    "groupTitle": "Provincias",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/province",
    "title": "Listar Provincias",
    "name": "Listar_Provincias",
    "group": "Provincias",
    "description": "<p>Lista todas las provincias.</p>",
    "success": {
      "examples": [
        {
          "title": "Provincia",
          "content": "[ {\n   \"name\": \"Nombre Provincia\",\n   \"enabled\": [true|false]\n  }, ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/provinces/province.service.ts",
    "groupTitle": "Provincias",
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/password",
    "title": "Cambiar Contraseña",
    "name": "Cambiar_Contrase_a",
    "group": "Seguridad",
    "description": "<p>Permite cambiar la contraseña de usuario</p>",
    "examples": [
      {
        "title": "Body",
        "content": "{\n     \"currentPassword\" : \"currPass\",\n     \"newPassword\" : \"newPass\",\n     \"verifyPassword\" : \"newPass\"\n}",
        "type": "json"
      },
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "version": "0.0.0",
    "filename": "src/security/security.service.ts",
    "groupTitle": "Seguridad",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Crear Usuario",
    "name": "Crear_Usuario",
    "group": "Seguridad",
    "description": "<p>Registra un nuevo usuario en el sistema.</p>",
    "examples": [
      {
        "title": "Usuario",
        "content": "{\n  \"name\": \"Nombre Usuario\",\n  \"login\": \"login\"\n  \"password\": \"password\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/security/security.service.ts",
    "groupTitle": "Seguridad",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"tokenData\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/signin",
    "title": "Log In",
    "name": "Log_In",
    "group": "Seguridad",
    "description": "<p>Login en el sistema.</p>",
    "examples": [
      {
        "title": "Usuario",
        "content": "{\n  \"login\": \"login\"\n  \"password\": \"password\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/security/security.service.ts",
    "groupTitle": "Seguridad",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"tokenData\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"messages\" : [\n     {\n       \"path\" : \"propertyName\",\n       \"message\" : \"Error Text\"\n     },\n     ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/auth/signout",
    "title": "Log Out",
    "name": "Log_Out",
    "group": "Seguridad",
    "description": "<p>Desloguea al usuario y limpia el token de sesión.</p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/security/security.service.ts",
    "groupTitle": "Seguridad",
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/auth/currentUser",
    "title": "Usuario Actual",
    "name": "Usuario_Actual",
    "group": "Seguridad",
    "description": "<p>Obtiene información del usuario logueado actualmente</p>",
    "success": {
      "examples": [
        {
          "title": "Usuario",
          "content": "{\n  \"id\": \"Id de usuario\"\n  \"name\": \"Nombre Usuario\",\n  \"login\": \"login\"\n  \"roles\": [\"USER\", \"ADMIN\"...]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/security/security.service.ts",
    "groupTitle": "Seguridad",
    "examples": [
      {
        "title": "Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized Method",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"url\" : \"http://...\",\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 Header X-Status-Reason: {Message}\n{\n   \"error\" : \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
