const getUsersBlog = async(userId) => {

 const res = await fetch(`https://api.github.com/users/${userId}`).then(response=>response.json());
 if (res.ok) throw new Error('Wrong data!');
  return res;
};

export const getUsersBlogs = (arr) =>
Promise.all(arr.map(el => getUsersBlog(el).then(response => response.blog)));




console.log(getUsersBlog('github'));
console.log(getUsersBlogs(['google','facebook','github']));
getUsersBlogs(['google', 'facebook', 'gaearon']).then(linkList => console.log(linkList));