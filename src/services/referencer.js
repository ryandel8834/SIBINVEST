import mocks from '../mocks'

export default {
    getReferencesData () {
        return new Promise ((resolve, reject) => {
            resolve(mocks.references)
        })
    }
}