import { UserProps, UserModalProps } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
	const [post, setPost] = useState<UserProps>({
		id: 1,
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: { lat: "", lng: "" },
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: "",
		},
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setPost((prevPost) => {
			const keys = name.split(".");
			const newPost = { ...prevPost };

			let temp: Record<string, unknown> = newPost;
			for (let i = 0; i < keys.length - 1; i++) {
				temp[keys[i]] = {
					...(temp[keys[i]] as Record<string, unknown>),
				};
				temp = temp[keys[i]] as Record<string, unknown>;
			}

			temp[keys[keys.length - 1]] = value;
			return newPost;
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(post);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-4 text-gray-800 cursor-pointer">
					Add New User
				</h2>
				<form onSubmit={handleSubmit}>
					{/* Basic Fields */}
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 font-medium mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={post.name}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 font-medium mb-2"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={post.username}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={post.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Address Fields */}
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">
							Address
						</label>
						<input
							type="text"
							name="address.street"
							placeholder="Street"
							value={post.address.street}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="address.suite"
							placeholder="Suite"
							value={post.address.suite}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="address.city"
							placeholder="City"
							value={post.address.city}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="address.zipcode"
							placeholder="Zip Code"
							value={post.address.zipcode}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Geo Fields */}
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">
							Geo
						</label>
						<input
							type="text"
							name="address.geo.lat"
							placeholder="Latitude"
							value={post.address.geo.lat}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="address.geo.lng"
							placeholder="Longitude"
							value={post.address.geo.lng}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Other Fields */}
					<div className="mb-4">
						<label
							htmlFor="phone"
							className="block text-gray-700 font-medium mb-2"
						>
							Phone
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							value={post.phone}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="website"
							className="block text-gray-700 font-medium mb-2"
						>
							Website
						</label>
						<input
							type="text"
							id="website"
							name="website"
							value={post.website}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Company Fields */}
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">
							Company
						</label>
						<input
							type="text"
							name="company.name"
							placeholder="Company Name"
							value={post.company.name}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="company.catchPhrase"
							placeholder="Catch Phrase"
							value={post.company.catchPhrase}
							onChange={handleChange}
							className="w-full mb-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="company.bs"
							placeholder="Business Strategy"
							value={post.company.bs}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Buttons */}
					<div className="flex justify-between items-center">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
						>
							Save User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserModal;
