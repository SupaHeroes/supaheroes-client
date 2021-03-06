import React from 'react';
import ImageUploading from 'react-images-uploading';
import {
	UploadOutlined,
	DeleteOutlined,
	EditOutlined,
} from '@ant-design/icons';
import { useDetails } from '../../hooks/contextHooks/DetailsContext';

export function PicturesWall() {
	const { metadata, setMetadata } = useDetails();
	const maxNumber = 6;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setMetadata({ ...metadata, images: imageList });
		console.log('images', metadata.images);
	};

	return (
		<div className='App '>
			<ImageUploading
				multiple
				value={metadata.images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey='data_url'
			>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className=' bg-supadark-dark p-8 rounded-lg'>
						<div>
							<button
								style={isDragging ? { color: 'red' } : undefined}
								onClick={onImageUpload}
								className=' mr-8 bg-supadark rounded-lg p-5 text-white'
								{...dragProps}
							>
								
								<UploadOutlined className='text-2xl' />
								
							</button>
							&nbsp;
							{metadata.images.length === 0 ? null : (
								<button
									className='text-2xl bg-supadark rounded-xl p-5 text-supadark-light'
									onClick={onImageRemoveAll}
								>
									Remove All
									<DeleteOutlined className='ml-6 text-6xl' />
									<div className='bg-supagreen-dark rounded-lg text-supadark-dark font-bold text-2xl py-2 px-3 mt-6'>
										Remove All
									</div>
								</button>
							)}
						</div>

						<div>
							{imageList.map((image, index) => (
								<div key={index} className='flex m-3 mt-8'>
									<img src={image['data_url']} alt='' width='250' />
									<div className=' ml-7 '>
										<button
											className='m-4 bg-supagreen-dark rounded-xl text-supadark-dark font-bold text-base py-2 px-3 flex justify-center items-center'
											onClick={() => onImageUpdate(index)}
										>
											<EditOutlined className='mr-5 ' />
											Update
										</button>
										<button
											className='m-4 bg-supagreen-dark rounded-xl text-supadark-dark font-bold text-base py-2 px-3 flex justify-center items-center'
											onClick={() => onImageRemove(index)}
										>
											<DeleteOutlined className='mr-5 ' />
											Remove
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

export default PicturesWall;
