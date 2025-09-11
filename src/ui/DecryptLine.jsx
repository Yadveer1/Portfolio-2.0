import DecryptedText from './DecryptedText';

function DecryptLine({texts}) {
    return (
        <div style={{ padding: '5px 0' }}>
              <DecryptedText
                className="text-white text-sm md:text-2xl font-semibold z-20"
                encryptedClassName="text-gray-400 text-lg md:text-2xl font-mono"
                speed={30}
                sequential={true}
                text={texts}
                animateOn="view"
                revealDirection="start"
              />
        </div>
    )
}

export default DecryptLine;