## Example

Stream CSV in standard input
Pass metadata as argument
Parsed n-triples on standard output

For example

```
cat ../test/support/test001-minimal.csv | node index.js ../test/support/test001-minimal.csv-metadata.json > out.nt
```
