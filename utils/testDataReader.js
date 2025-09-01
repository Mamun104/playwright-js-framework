import fs from 'fs';

export function getUser(role) {
  const data = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
  return data[role];
}
