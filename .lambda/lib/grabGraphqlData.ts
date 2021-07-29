import { ExtractorKeys, Extractor } from './constants'

export const grabGraphqlData = (
  extractorKey: ExtractorKeys,
  data: Record<string, any>,
): Record<string, any> => {
  const { node: nodeKey, fields } = Extractor[extractorKey]
  const node = data[nodeKey][0]

  return fields.reduce(
    (data, field) => ({
      ...data,
      ...node[field],
    }),
    {},
  )
}
