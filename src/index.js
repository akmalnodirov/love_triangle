/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let first_lover;
    let second_lover;
    let third_lover;
    let triangles = 0;
    let counter = 0;

    for (let i = 0; i < preferences.length; i++)
    {

        first_lover = i + 1;
        second_lover = preferences[i];
        third_lover = preferences[second_lover - 1];

        if (preferences[third_lover - 1] == first_lover)
        {
            triangles++;
        }

    }

    return parseInt(triangles / 3);

};