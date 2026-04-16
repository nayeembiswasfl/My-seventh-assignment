let friendsPromise;

export async function getFriends() {
  if (!friendsPromise) {
    friendsPromise = fetch('/friends.json', { cache: 'force-cache' }).then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to load friend data.');
      }

      return response.json();
    });
  }

  return friendsPromise;
}

