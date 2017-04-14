# dependency-injection

di.ts represents realisation of dependency injection mechanism. There you got 2 main decorators:
- Component: to be used on classes you want to register
- Autowire: property decorator where you want an instance of registered service to be injected.

Use Configuration class to register all services before app start. You can use different configurations in different enviroment. For example in testing.
