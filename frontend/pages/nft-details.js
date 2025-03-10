import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { NFTContext } from '../context/NFTContext';
import { shortenAddress } from '../utils/shortenAddress';
import { Button, Loader, Modal } from '../components';
import images from '../assets';
import styles from '../styles/Scroll.module.css';

// // checkBoxのため追記

// if (typeof document !== 'undefined') {
//   const scrollElm = document.getElementById('scroll_elm');
//   const check = document.getElementById('check');
//   // const endFlag = false;
//   scrollElm.addEventListener('scroll', () => {
//     if (scrollElm.scrollHeight - scrollElm.scrollTop === scrollElm.clientHeight) {
//       check.disabled = false;
//     }
//   });
// }

// row-span-3 col-span-3 overflow-y-auto
// checkBoxのため追記
const ApproveContractCmp = () => (
  <div className="overflow-y-auto max-h-96">
    <div>
      {/* <div className="overflow-auto md:overflow-scroll"> */}

      <h1>利用規約</h1>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <h2>第1条（適用）</h2>
      <ol>
        <li>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
        <li>当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
        <li>本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
      </ol>
      <h2>第2条（利用登録）</h2>
      <ol>
        <li>本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。</li>
        <li>当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
          <ol>
            <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li>本規約に違反したことがある者からの申請である場合</li>
            <li>その他，当社が利用登録を相当でないと判断した場合</li>
          </ol>
        </li>
      </ol>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
      <p>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
    </div>
    <div className="check_item">
      <input type="checkbox" name="check" className="check" id="check" />
      <label htmlFor="check">同意する</label>
    </div>
  </div>
);

const PaymentBodyCmp = ({ nft, nftCurrency }) => (
  <div className="flex flex-col">
    <div className="flexBetween">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">
        Item
      </p>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">
        Subtotal
      </p>
    </div>

    <div className="flexBetweenStart my-5">
      <div className="flex-1 flexStartCenter">
        <div className="relative w-28 h-28">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flexCenterStart flex-col ml-5">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {shortenAddress(nft.seller)}
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">
            {nft.name}
          </p>
        </div>
      </div>

      <div>
        <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">
          {nft.price} <span className="font-semibold">{nftCurrency}</span>
        </p>
      </div>
    </div>

    <div className="flexBetween mt-10">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">
        Total
      </p>
      <p className="font-poppins dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal">
        {nft.price} <span className="font-semibold">{nftCurrency}</span>
      </p>
    </div>
  </div>
);

const AssetDetails = () => {
  const { nftCurrency, buyNft, currentAccount, isLoadingNFT } = useContext(NFTContext);
  const [nft, setNft] = useState({
    image: '',
    itemId: '',
    name: '',
    owner: '',
    price: '',
    seller: '',
  });
  const [paymentModal, setPaymentModal] = useState(false);

  // checkBoxのため追記
  const [checkContract, setCheckContract] = useState(false);
  const [approvalModal, setApprovalModal] = useState(false);

  const [successModal, setSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // // checkBoxのため追記
  // const [checkBox, setCheckBox] = useState(true);

  useEffect(() => {
    // disable body scroll when navbar is open
    // checkBoxのためapprovalModal追記
    if (approvalModal || paymentModal || successModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    // checkBoxのため追記
  }, [approvalModal, paymentModal, successModal]);

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router.query);

    setIsLoading(false);
  }, [router.isReady]);

  // // checkBoxのため追記
  // useEffect(() => {
  //   if (!checkContractlModal) return;
  //   setCheckContractModal(true);
  //   if (typeof document !== 'undefined') {
  //     const scrollElm = document.getElementById('scroll_elm');
  //     const check = document.getElementById('check');
  //     // const endFlag = false;
  //     scrollElm.addEventListener('scroll', () => {
  //       if (scrollElm.scrollHeight - scrollElm.scrollTop === scrollElm.clientHeight) {
  //         check.disabled = false;
  //       }
  //     });
  //   }
  // }, [checkContractlModal]);

  // checkBoxのため追記
  // useEffect(() => {
  //   if (!checkContract) return;
  //   setCheckContract(!checkContract);
  // }, [checkContract]);

  // checkBoxのため追記
  const approve = async () => {
    // await buyNft(nft);
    setApprovalModal(false);
    setPaymentModal(true);
  };

  const checkout = async () => {
    await buyNft(nft);
    setPaymentModal(false);
    setSuccessModal(true);
  };

  const handleChange = (e) => setCheckContract(e.target.value);

  // checkBoxのため一旦コメントアウト
  // const checkout = async () => {
  //   await buyNft(nft);

  //   setPaymentModal(false);
  //   setSuccessModal(true);
  // };
  if (isLoading) return <Loader />;

  return (
    <div className="relative flex justify-center md:flex-col min-h-screen">
      <div className="relative flex-1 flexCenter sm:px-4 p-12 border-r md:border-r-0 md:border-b dark:border-nft-black-1 border-nft-gray-1">
        <div className="relative w-557 minmd:w-2/3 minmd:h-2/3 sm:w-full sm:h-300 h-557 ">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            objectFit="cover"
            className=" rounded-xl shadow-lg"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-1 justify-start sm:px-4 p-12 sm:pb-4">
        <div className="flex flex-row sm:flex-col">
          <h2 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl minlg:text-3xl">
            {nft.name}
          </h2>
        </div>

        <div className="mt-10">
          <p className="font-poppins dark:text-white text-nft-black-1 text-xs minlg:text-base font-normal">
            Creator
          </p>
          <div className="flex flex-row items-center mt-3">
            <div className="relative w-12 h-12 minlg:w-20 minlg:h-20 mr-2">
              <Image
                src={images.creator1}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-lg font-semibold">
              {shortenAddress(nft.seller)}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          <div className="w-full border-b dark:border-nft-black-1 border-nft-gray-1 flex flex-row">
            <p className="font-poppins dark:text-white text-nft-black-1 font-medium text-base mb-2">
              Details
            </p>
          </div>
          <div className="mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-base">
              {nft.description}
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col mt-10">
          {currentAccount === nft.seller.toLowerCase() ? (
            <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-base border border-gray p-2">
              You cannot buy your own NFT
            </p>
          ) : currentAccount === nft.owner.toLowerCase() ? (
            <Button
              btnName="List on Marketplace"
              btnType="primary"
              classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
              handleClick={() => router.push(
                `/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`,
              )}
            />
          ) : (
            <Button
              btnName={`Buy for ${nft.price} ${nftCurrency}`}
              btnType="primary"
              classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
              // handleClick={() => setPaymentModal(true)}
              handleClick={() => setApprovalModal(true)}
            />
          )}
        </div>
      </div>

      {/* checkBoxのため追記 */}
      {approvalModal && (
        <Modal
          header="Check the Contract"
          body={<ApproveContractCmp />}
          footer={(
            <div className="flex flex-row sm:flex-col">
              <label>
                <input
                  type="checkbox"
                  value={!checkContract}
                  onChange={handleChange}
                  checked={null}
                />
                Agree the Contract
              </label>
              {checkContract === false ? (
                <Button
                  btnName="Reject"
                  btnType="outline"
                  classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                  handleClick={null}
                />
              ) : (
                <Button
                  btnName="Approve"
                  btnType="primary"
                  classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                  handleClick={approve}
                />
              )}

              <Button
                btnName="Cancel"
                btnType="outline"
                classStyles="rounded-lg"
                handleClick={() => setApprovalModal(false)}
              />
            </div>
          )}
          handleClose={() => setApprovalModal(false)}
        />
      )}

      {paymentModal && (
        <Modal
          header="Check Out"
          body={<PaymentBodyCmp nft={nft} nftCurrency={nftCurrency} />}
          footer={(
            <div className="flex flex-row sm:flex-col">
              <Button
                btnName="Checkout"
                btnType="primary"
                classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={checkout}
              />
              <Button
                btnName="Cancel"
                btnType="outline"
                classStyles="rounded-lg"
                handleClick={() => setPaymentModal(false)}
              />
            </div>
          )}
          handleClose={() => setPaymentModal(false)}
        />
      )}

      {isLoadingNFT && (
        <Modal
          header="Buying NFT..."
          body={(
            <div className="flexCenter flex-col text-center">
              <div className="relative w-52 h-52">
                <Loader />
              </div>
            </div>
          )}
          handleClose={() => setSuccessModal(false)}
        />
      )}

      {successModal && (
        <Modal
          header="Payment Successful"
          body={(
            <div
              className="flexCenter flex-col text-center"
              onClick={() => setSuccessModal(false)}
            >
              <div className="relative w-52 h-52">
                <Image
                  src={nft.image || images[`nft${nft.i}`]}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal mt-10">
                {' '}
                You successfully purchased
                <span className="font-semibold">{nft.name}</span> from
                <span className="font-semibold">
                  {shortenAddress(nft.seller)}
                </span>
                .
              </p>
            </div>
          )}
          footer={(
            <div className="flexCenter flex-col">
              <Button
                btnName="Check it out"
                btnType="primary"
                classStyles="sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={() => router.push('/my-nfts')}
              />
            </div>
          )}
          handleClose={() => setSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default AssetDetails;
