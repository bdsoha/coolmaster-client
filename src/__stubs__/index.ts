 /* eslint-disable */

export const json = {
    ls:      require('./ls.response.json'),
    ls2:     require('./ls2.response.json'),
    props:   require('./props.response.json'),
    generic: require('./generic.response.json'),
    set:     require('./set.response.json'),
} as Record<string, any>

export const response = {
    ls:    require('./ls.response').default,
    ls2:   require('./ls2.response').default,
    props: require('./props.response').default,
    set:   require('./set.response').default,
}
