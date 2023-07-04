const { Proyectos } = require('../db')

const CreateProyect = async ({ name, repo, img, description, linkedin }) => {
    try {
        const NewProyect = new Proyectos({
            name: name,
            repo: repo,
            img: img,
            description: description,
            linkedin: linkedin
        })
        const save = await NewProyect.save()

        return save

    } catch (error) {
        throw new Error({error:error.message})

    }
}

module.exports = { CreateProyect }