import PropTypes from 'prop-types';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaRegCopy } from 'react-icons/fa6';
import { TiTick } from 'react-icons/ti';

const Snippet = ({ codeString, lang, title }) => {
	const [copy, setCopy] = useState(false);

	const copyCode = () => {
		navigator.clipboard.writeText(codeString);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3000);
	};

	return (
		<div className='rounded-[6px] border w-[90vw] md:w-full container border-primary overflow-hidden mr-3'>
			<div className='bg-primary-600 h-7 rounded-t-[6px] flex items-center justify-between px-3'>
				<p>{title} Code</p>
				<div className='cursor-pointer'>
					{copy ? (
						<div className='flex justify-end text-green-500 items-center gap-1 p-2'>
							<TiTick size={16} />
						</div>
					) : (
						<div
							onClick={copyCode}
							className='flex justify-end items-center gap-1 p-[5px] hover:bg-primary-700/80 duration-200 rounded-md'>
							<FaRegCopy size={16} />
						</div>
					)}
				</div>
			</div>
			<SyntaxHighlighter
				language={lang}
				style={atomOneDark}
				customStyle={{
					padding: '8px 6px',
					backgroundColor: '#030712',
					borderRadius: '6px',
					fontSize: '13px',
				}}>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

Snippet.propTypes = {
	codeString: PropTypes.string.isRequired,
	lang: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Snippet;
