import { UserProps } from "@/interfaces"

const UserCard:React.FC<UserProps> = ({name, username, email, address, phone, website, company}) => {
  return (
     <div className="max-w-xl mx-auto my-6 p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} | {username}</h2>
      </div>
      <p className="text-gray-600">{email}</p>
      <div className="mt-4 flex items-start flex-col justify-between text-md text-black">
        <span>Address: {address.street} {address.suite} {address.city} {address.zipcode}</span>
        <span>Location: Latitude - {address.geo.lat} Longitude - {address.geo.lng}</span>
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
        <span>Company: {company.name}, {company.catchPhrase} : {company.bs}</span>
      </div>
    </div>
  );
}

export default UserCard