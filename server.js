import logger from './logger.js'
import express from 'express'
import supabase from './supabase.js'

const app = new express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.json({
    error: 'This route doesn\'t exist'
  })
})

app.get('/languages', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select()
    res.json({
      data
    })
    logger.info('Fetched all languages')
    if (error) {
      logger.error(error)
      throw new Error(error)
    }
  } catch (error) {
    logger.error(error)
  }
})

app.post('/languages', async function (req, res) {
  const name = req.body.name
  const description = req.body.description
  const stars = req.body.stars

  try {
    const { data, error } = await supabase
      .from('languages')
      .insert({
        name: name,
        description: description,
        stars: stars
      })
      .select()

    if (error) {
      logger.error(error)
      res.status(500).send(error.message)
    } else {
      res.status(200).json(data)
    }
  } catch (err) {
    logger.error(err)
    res.status(500).send(err.message)
  }
})

app.get('/languages/:name', async function (req, res) {
  const name = req.params.name

  try {
    const { data, error } = await supabase
      .from('languages')
      .select()
      .ilike('name', name)
    if (error) {
      logger.error(error)
      res.status(500).send(error.message)
    } else {
      res.status(200).json(data)
    }
  } catch (err) {
    logger.error(err)
    res.status(500).send(err.message)
  }
})

app.put('/languages/:id', async function (req, res) {
  const id = req.params.id
  const name = req.body.name
  const description = req.body.description
  const stars = req.body.stars

  try {
    const { error } = await supabase
      .from('languages')
      .update({
        name: name,
        description: description,
        stars: stars
      })
      .eq('id', id)

    if (error) {
      logger.error(error)
      res.status(500).send(error.message)
    } else {
      res.status(200).json({
        message: `${id} updated successfully`
      })
    }
  } catch (err) {
    logger.error(err)
    res.status(500).send(err.message)
  }
})

app.delete('/languages/:id', async function (req, res) {
  const id = req.params.id

  try {
    const { error } = await supabase
      .from('languages')
      .delete()
      .eq('id', id)

    if (error) {
      logger.error(error)
      res.status(500).send(error.message)
    } else {
      res.status(200).json({
        message: `${id} removed successfully`
      })
    }
  } catch (err) {
    logger.error(err)
    res.status(500).send(err.message)
  }
})

// Run server
app.listen(port, () => {
  logger.info(`🚀 ExpressJS Supabase API Starter running on port ${port}`)
  console.log(`🚀 ExpressJS Supabase API Starter running on port ${port}`)
})
