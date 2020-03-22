import { EpidemicModel } from "./epidemicmodel"

test("run epidemic simulation", () => {
    const population = 80000000
                 
    const model = new EpidemicModel(1, population)

    var state = model.step(15 / population, 0.05, 0)
    expect(state.dead).toEqual(0)
    expect(state.recovered).toEqual(0)
    expect(state.infected).toEqual(16)

    var state = model.step(12 / population, 0.05, 0)
    expect(state.dead).toEqual(0)
    expect(state.recovered).toEqual(15)
    expect(state.infected).toEqual(192)

    var state = model.step(12 / population, 0.05, 0)
    expect(state.dead).toEqual(9)
    expect(state.recovered).toEqual(197)
    expect(state.infected).toEqual(2304)

    var state = model.step(10 / population, 0.05, 0)
    expect(state.dead).toEqual(124)
    expect(state.recovered).toEqual(2385)
    expect(state.infected).toEqual(23040)
})