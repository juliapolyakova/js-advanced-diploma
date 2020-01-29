/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const index = Math.floor(Math.random() * allowedTypes.length);
  yield new allowedTypes[index](maxLevel);

}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];

  for (let i=0; i < characterCount; i++) {
    const hero = characterGenerator(allowedTypes, maxLevel);
    team.push(hero);
  }
  return team;
}
