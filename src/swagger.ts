import path from 'path';
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'YaviBook',
            description: 'Metodos que usamos en nuestra pagina por favor ponernos buena nota',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3200,http://161.97.140.245:8082"

            }
        ]
    },
    apis: [`${path.join(__dirname, './routers/*.ts')}`], 
};

export default swaggerSpec;