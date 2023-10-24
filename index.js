import fp from 'fastify-plugin'

const fastifyBetterSqlite3 = (fastify, db, next) => {
  if (fastify.betterSqlite3) {
    next(new Error('plugin already registered'))
  }

  fastify.decorate('betterSqlite3', db)
  fastify.addHook('onClose', (fastify, done) => db.close(done))

  next()
}

export default fp(fastifyBetterSqlite3, {
  fastify: '4.x',
  name: 'fastify-better-sqlite3'
})
