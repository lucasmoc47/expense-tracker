import React, { useContext } from 'react';

import Transaction from './Transaction'

import { TransactionsContext } from '../contexts/TransactionsContext'

export default function TransactionList() {
	const { transactions } = useContext(TransactionsContext)

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map(transaction => (
					<Transaction transaction={transaction} />
				))}
			</ul>
		</>
	)
}
