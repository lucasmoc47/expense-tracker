import React, { useState } from 'react';

// import { Container } from './styles';

export default function AddTransaction() {
	const [text, setText] = useState("")
	const [amount, setAmount] = useState(0)

	return (
		<>
			<h3>Add new transaction</h3>
			<form id="form">
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						id="text"
						placeholder="Enter text..."
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount"
					>Amount <br />
						(negative - expense, positive - income)</label
					>
					<input
						type="number"
						id="amount"
						placeholder="Enter amount..."
						value={amount}
						onChange={(event) => setAmount(event.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
}
