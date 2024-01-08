const skills = [
    {id: 1, skill: 'Javascript', canDo: true},
    {id: 2, skill: 'Html', canDo: true},
    {id: 3, skill: 'Css', canDo: true},
    {id: 4, skill: 'React', canDo: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update (id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

function deleteOne (id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function create (skill) {
    skill.id = Date.now() % 1000000
    skill.canDo = false
    skills.push(skill)
}

function getOne (id) {
    id = parseInt(id)
    return skills.find(language => language.id === id)
}

function getAll () {
    return skills
}