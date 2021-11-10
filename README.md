# ms-diamant

The service for my diamant app

## What and why?

I was given a coding challenge to make the try-your-luck game Diamat.

The rules are simple. A user has a deck of cards in which are different types of trap and treasure cards.
There various types of trap card and treasure cards. Each treasure card has points associated with it.

The goal is to get collect as many points as possible without collecting two of the same trap cards.
The player can give up at any time.

## Architecture decisions

### Why use Heroku?

I haven't used Heroku for hosting in a long time. It was good to get back into the swing of things with them.

## Next steps

There is really only one immediate step I'd like to take with this app:

- Unit, integration, and E2E testing: I would implement unit testing in the app as a deployment step,
  integration and E2E testing would be in the deployment pipeline.

## Further evolution

These are the next steps that would come further down the line if this were an ongoing project.
Again, they're in no particular order:

- Connect to a database: If this app were to move forward in a serious capacity, connecting to a database
  for user management would be critical.
- Basic security: Currently, anyone can hit this service and add fake scores. I'd like to implement some
  sort of security authentication to ensure that isn't able to happen. At the very least, I'd implement
  validation for headers, JWT, or both.
- Advanced security: In addition to implementing the basic security, after connecting to a database, I'd like
  to implement data sanitization so we don't run into a [Little Bobby Tables]('https://xkcd.com/327/') incident.
