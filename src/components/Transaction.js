import React from 'react';

export default function Transaction(props) {
	const { transaction } = props
	const sign = transaction.amount < 0 ? '-' : '+'

	return (
		<li key={transaction.key} className={sign === '+' ? 'plus' : 'minus'}>
			Cash <span>{sign}${Math.abs(transaction.amount)}</span>
			<button className="delete-btn">x</button>
		</li>
	);
}