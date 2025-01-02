//with functions
// export const addUser = (req, res) => {
//   const {email, password} = req.body
//   res.status(200).json({message:'User Added'})
// }
// export default {
//   addUser,
// }


//with static methods
export default {
  addUser(req, res){
    const { email, password } = req.body;
    res.status(200).json({ message: "User Added" , newUser: req.body});
  },
  removeUser(req, res){
    res.status(200).json({ message: "User Removed" , removedUser: req.params.id});
  }
}
