import React, { useContext } from 'react';

import { TransactionsContext } from '../contexts/TransactionsContext'

export default function Transaction(props) {
	const { deleteTransaction } = useContext(TransactionsContext)
	
	const { transaction } = props
	const sign = transaction.amount < 0 ? '-' : '+'

	return (
		<li key={transaction.key} className={sign === '+' ? 'plus' : 'minus'}>
			{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
		</li>
	);
}