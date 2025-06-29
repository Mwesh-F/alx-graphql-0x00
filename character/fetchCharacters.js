const { request, gql } = require('graphql-request');
const fs = require('fs');

const endpoint = 'https://rickandmortyapi.com/graphql';

const fetchCharacter = async (id) => {
  const query = gql`
    {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    fs.writeFileSync(
      `character/character-id-${id}-output.json`,
      JSON.stringify(data, null, 2)
    );
    console.log(`✅ character-id-${id}-output.json saved`);
  } catch (err) {
    console.error(`❌ Error fetching character ID ${id}:`, err);
  }
};

[1, 2, 3, 4].forEach(fetchCharacter);
