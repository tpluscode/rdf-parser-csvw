import formats from '@rdfjs/formats-common'
import $rdf from 'rdf-ext'
import datasetExt from 'rdf-dataset-ext'
import rdfFs from 'rdf-utils-fs'
import Parser from '../index.js'

(async function main () {
  const metadata = await datasetExt.fromStream($rdf.dataset(), rdfFs.fromFile(process.argv[2]))

  const parser = new Parser({
    metadata
  })

  const quads = parser.import(process.stdin)
  const ntriples = formats.serializers.import('application/n-triples', quads)
  ntriples.pipe(process.stdout)

  await ntriples.finished
})()
